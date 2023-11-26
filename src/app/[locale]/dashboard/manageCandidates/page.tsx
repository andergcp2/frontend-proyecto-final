'use client';

import ManageCandidatesContainer from "./container/ManageCandidatesContainer";
import { ManageCandidatesProvider } from "./context/manageCandidatesContext";

const ManageCandidatesPage = () => {
  return (
    <ManageCandidatesProvider>
      <ManageCandidatesContainer />
    </ManageCandidatesProvider>
  )
}

export default ManageCandidatesPage;