import { WaveSettings, LeadDetail, EcgEvent, constants, Lead, Signal, FourSignal } from "../Generator/ECGTypes";
import { copy } from "./utility";

const generateSignal = (leadDetails: LeadDetail[]): FourSignal => {

    // add each event to the signal
    const addEventToSignal = (signal: Signal, [event, axisFactor]: [EcgEvent, number]): Signal => {
        let start = Math.floor(event.parameters.start);

        for (const [_, settings] of Object.entries(event.parameters.waves)) {
            const { radius } = settings;
            const waveEnd = Math.min(constants.sampleCount, start + 2 * radius);
            const firstIndex = Math.max(0, start);

            // as 'i' refers to an idx (up to 5000), subtracting 
            // 'waveStart' and 'radius' sets the center of the wave as 0
            for(let i = firstIndex; i < waveEnd; i++) {                          
                signal[i][0] += axisFactor * bump(i - start - radius, settings); 
                signal[i][1] = event.information.length !== 0;    
            }
        }

        return signal;
    }

    // convert lead (event series) to a one dimensional ECG signal
    // we combine axis factor with event for convenience
    const renderLead = (lead: Lead): Signal => {
        const { events, startIdx, sampleCount, axisFactor } = leadDetails.find(ld => ld.lead === lead)!;
        const eventAndAxisList: [EcgEvent, number][] = events.map(e => [e, axisFactor]);
        return eventAndAxisList.reduce(addEventToSignal, copy(constants.noisySignal)).slice(startIdx, startIdx + sampleCount);
    }
    
    const renderRow = (row: Lead[]): Signal => {
        return row.map(renderLead).flat()
    }

    return constants.signalStructure.map(renderRow);
}


// determine magnitude of depolarisation (gaussian), center of the wave is pos === 0
const bump = (pos: number, { mag, upstroke, kurtosis }: WaveSettings): number => {
    const yScale       = mag + (pos < 0 ? 0 : upstroke);
    const yTranslation = pos < 0 ? upstroke : 0;
    return yScale * Math.pow(Math.E, -1 * (Math.pow(kurtosis * pos, 2))) + yTranslation;
}

export default generateSignal;