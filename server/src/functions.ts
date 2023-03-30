import { OAuth2Client } from "google-auth-library";

export const getEmailFromToken = async (tokenId: string) => {
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

    try {
        const ticket = await client.verifyIdToken({
            idToken: tokenId,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        if (!ticket) {
            throw "";
        }
        return ticket.getPayload().email;
    } catch (error) {
        console.log("-- token expired --");
        return "";
    }
};
