import React, { useState } from 'react';

const CreateVote = () => {
  const [candidates, setCandidates] = useState([
    { name: '', age: '', description: '' }
  ]);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  // Thêm ứng viên mới
  const addCandidate = () => {
    setCandidates([...candidates, { name: '', age: '', description: '' }]);
  };

  // Xóa ứng viên theo index
  const removeCandidate = (index) => {
    const updatedCandidates = [...candidates];
    updatedCandidates.splice(index, 1);
    setCandidates(updatedCandidates);
  };

  // Xử lý thay đổi thông tin của ứng viên
  const handleCandidateChange = (index, event) => {
    const { name, value } = event.target;
    const updatedCandidates = [...candidates];
    updatedCandidates[index][name] = value;
    setCandidates(updatedCandidates);
  };

  // Xử lý thay đổi thời gian bắt đầu và kết thúc
  const handleTimeChange = (event, timeType) => {
    const value = event.target.value;
    if (timeType === 'start') {
      setStartTime(value);
    } else if (timeType === 'end') {
      setEndTime(value);
    }
  };

  return (
    <div>
      <h2>Create Vote</h2>
      <form>
        {candidates.map((candidate, index) => (
          <div key={index}>
            <label>Candidate {index + 1}</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={candidate.name}
              onChange={(e) => handleCandidateChange(index, e)}
            />
            <input
              type="text"
              name="age"
              placeholder="Age"
              value={candidate.age}
              onChange={(e) => handleCandidateChange(index, e)}
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={candidate.description}
              onChange={(e) => handleCandidateChange(index, e)}
            />
            <button type="button" onClick={() => removeCandidate(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addCandidate}>
          Add Candidate
        </button>
        <div>
          <label>Start Time:</label>
          <input
            type="datetime-local"
            value={startTime}
            onChange={(e) => handleTimeChange(e, 'start')}
          />
        </div>
        <div>
          <label>End Time:</label>
          <input
            type="datetime-local"
            value={endTime}
            onChange={(e) => handleTimeChange(e, 'end')}
          />
        </div>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default CreateVote;