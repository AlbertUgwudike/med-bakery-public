import ecg from "../../images/ecg.png"
import steth from '../../images/steth.png';
import cxr from '../../images/cxr.png';
import cells from '../../images/cells.png';
import { Product } from "../../types";

// This products list is not necccessarily in sync with the server / database
// We crossreference between this list and the user-purchased products retreicved by the server
// to determine which porducts are available

export const products: Product[] = [
    { name: "Finals", description: "Everything you need for Finals!", path: "/User/Finals", imgsrc: steth },
    { name: "ECGs", description: "The magic behind the squiggles", path: "/User/ECG", imgsrc: ecg },
    { name: "Anatomy", description: "Origins and insertions galore", path: "/User/Anatomy", imgsrc: ecg },
    { name: "CXRs", description: "All the shades of grey", path: "/User/MRCGP", imgsrc: cxr },
    { name: "FBCs", description: "No blood cells left uncounted", path: "/User/Early", imgsrc: cells }
]