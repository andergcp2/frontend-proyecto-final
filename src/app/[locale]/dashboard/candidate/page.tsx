import { FC } from "react";
import CandidateContainer from "./container/CandidateContainer";
import { CandidateProvider } from "./context/candidateContext";

export interface CandidateProps { }

const Candidate: FC<CandidateProps> = () => {
    return (
        <CandidateProvider>
            <CandidateContainer />
        </CandidateProvider>
    )
}

export default Candidate;