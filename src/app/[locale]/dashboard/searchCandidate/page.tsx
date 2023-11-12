import SearchCandidateContainer from "./container/SearchCandidateContainer";
import { SearchCandidateProvider } from "./context/searchCandidateContext";

const SearchCandidate = () => {
  return (
    <SearchCandidateProvider>
      <SearchCandidateContainer />
    </SearchCandidateProvider>
  )
}

export default SearchCandidate;