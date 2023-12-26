import "./App.css";
import CreateVote from "./voting/create_voting/create_voting.tsx";
import VoteScreen from "./voting/voting_action/voting.tsx";
import { useState } from "react";
import {web3, votingContract} from "./web3.config";


function App() {
  const [currentTab, setCurrentTab] = useState("VOTING");
  const candidateList = [
    {
      ID: 2,
      name: "Candidate 2",
      age: 35,
      description: "Description for Candidate 2",
      voteCount: 0,
    },
    {
      ID: 2,
      name: "Candidate 2",
      age: 35,
      description: "Description for Candidate 2",
      voteCount: 0,
    },
  ];

  const changeTab = (tabName) => { 
    setCurrentTab(tabName);
  }

  async function getVoteCount() {
    const voteCount = await votingContract.methods.viewCandidatesList().call();
    console.log("vote count: ", voteCount);
  }


  return (
    <div className="App">
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className={currentTab === "VOTING" ? 'nav-link active' : 'nav-link'}
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            onClick={() => changeTab("VOTING")}
          >
            Bỏ phiếu
          </button>
          <button
            className={currentTab === "CREATE_VOTING" ? 'nav-link active' : 'nav-link'}
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            onClick={() => changeTab("CREATE_VOTING")}
          >
            Tạo cuộc bỏ phiếu
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        {currentTab === "VOTING" ? <VoteScreen candidates={candidateList}></VoteScreen> : <CreateVote></CreateVote>}
        <button onClick={getVoteCount}>Test Connect</button>
      </div>
    </div>
  );
}

export default App;
