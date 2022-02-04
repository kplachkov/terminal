import config from '../../../config.json';

const projects = async (args: string[]): Promise<string> => {
  const projects = config.projects;

  return projects.map(
      (project) => `<a class="underline" href="${project.url}" target="_blank">${project.name}</a> - ${project.description}`,
    )
    .join('\n');
};

export default projects;
