const Skills = ({ skills }) => {
  return (
    <div className="skills">
      <h3>Skills: </h3>
      <ul>
        {skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
