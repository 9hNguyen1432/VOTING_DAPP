import React from 'react';
import { votingContract } from '../../web3.config';


const VoteScreen = ({ candidates, onVoteClick }) => {
  const [lisCandidates, setListCandidates] = React.useState([]);

  const checkInStartAndEndTime = async (voteId) => {
    return await votingContract.methods.getStart(voteId).call() && !await votingContract.methods.getEnd(voteId).call();
  };

  const getVoteCandidate = async (voteId) => {
    return await votingContract.methods.viewCandidatesList(voteId).call();
  }

  return (
    <div>
            <input
              id='voteId'
              type="text"
              name="voteId"
              placeholder="ID cuộc bầu cử (từ người tổ chức cung cấp)"
              required
            />
            <button
              type="submit"
              onClick={async (e) => {
                e.preventDefault();
                const voteId = (document.getElementById('voteId') as any)?.value;
                if (!voteId) {
                  alert('Vui lòng nhập ID');
                  return;
                }
                if (await checkInStartAndEndTime(voteId)) {
                const candidates = await getVoteCandidate(voteId) as [];
                setListCandidates(candidates);
                console.log(candidates);
                }
              }}
            > Tiếp tục</button>
      <h2>Vote Screen</h2>
      {candidates.map((candidate, index) => (
        <div key={index} className="candidate-card">
          <h3>{candidate.name}</h3>
          <p>Age: {candidate.age}</p>
          <p>Description: {candidate.description}</p>
          <button onClick={() => onVoteClick(index)}>Vote</button>
        </div>
      ))}
    </div>
  );
};

export default VoteScreen;