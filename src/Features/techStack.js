import './techStack.css';

const TechStack = () => {
    return (
        <div className='Container'>
            <div className='tiltContainer1'></div>
            <div className='tiltContainer2'></div>
            <div className='MainContainer'>
                <h1>Tech I Use</h1>
                <div className='tableContainer'>
                    <table>
                        <tr>
                            <td>
                                <img src={require("../Images/python.png")} alt="Python" width="100px" />
                            </td>
                            <td>
                                <img src={require("../Images/java.png")} alt="Java" width="100px" />
                            </td>
                            <td>
                                <img src={require("../Images/javascript.png")} alt="Javascript" width="100px" />
                            </td>
                            <td>
                                <img src={require("../Images/matlab.png")} alt="Matlab" width="100px" />
                            </td>
                            <td>
                                <img src={require("../Images/cpp.png")} alt="C++" width="100px" />
                            </td>
                            <td>
                                <img src={require("../Images/c.png")} alt="C" width="100px" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src={require("../Images/react.png")} alt="React" width="100px" />
                            </td>
                            <td>
                                <img src={require("../Images/node.png")} alt="NodeJs" width="100px" />
                            </td>
                            <td>
                                <img src={require("../Images/postgres.png")} alt="Postgres" width="100px" />
                            </td>
                            <td>
                                <img src={require("../Images/linux.png")} alt="Linux" width="100px" />
                            </td>
                            <td>
                                <img src={require("../Images/git.png")} alt="Git" width="100px" />
                            </td>
                            <td>
                                <img src={require("../Images/rest.png")} alt="Rest" width="100px" />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TechStack