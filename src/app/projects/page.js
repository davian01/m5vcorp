import React from 'react';

const Projects = () => {
  const projects = [
    { name: 'Project Name', location: 'City, Province', year: '2025' },
    { name: 'Project Name', location: 'City, Province', year: '2025' },
    { name: 'Project Name', location: 'City, Province', year: '2025' },
  ];

  return (
    <div className="bg-off-white min-h-screen text-black">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-left leading-tight mt-20">
          Our
          <br />
          Projects
        </h1>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2">Project Name</th>
              <th className="py-2">Location</th>
              <th className="py-2">Year</th>
              <th className="py-2"></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index} className="border-b hover:text-accent-blue">
                <td className="py-4">{project.name}</td>
                <td className="py-4">{project.location}</td>
                <td className="py-4">{project.year}</td>
                <td className="py-4 text-right">
                  <button className="border border-black hover:border-white px-4 py-2 rounded-sm transition-colors hover:bg-accent-blue hover:text-white">
                    View Project
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects; 