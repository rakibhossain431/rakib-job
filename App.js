
import React, { useEffect, useState } from "react";
import JobBC from './component/JobBC'
import data from './assets/data.json'

 console.log(data)
function App() {
  const [jobs, setjobs] = useState([]);

    useEffect(() => setjobs(data) ,[])

    console.log(data)

  return (
    <div className="App">
      <div>Rakib</div>
        {jobs.length === 0 ? (
          <p>Jobs are fetching...</p>
        ): (
          jobs.map((job) => {
          return<JobBC rakib={job} key={job.id} />})
          )}

      <JobBC  />
    </div>
  );
}

export default App;
