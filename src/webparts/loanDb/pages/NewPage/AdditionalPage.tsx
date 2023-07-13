import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const AdditionalPage: React.FC = () => {

    console.log("hello");
    const {id} = useParams<{ id?: string }>();
    console.log(id);

    return (
      <div>
        <h2>Additional Page</h2>
        <p>This is an additional page accessed from the main page.</p>
        <p>ID is:{id&&id}</p>
        <p>Back to the <Link to="/">dashboard</Link></p>

      </div>
    );
  }

  export default AdditionalPage;
