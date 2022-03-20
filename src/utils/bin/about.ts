import config from "../../../config.json";

const about = async (args: string[]): Promise<string> => {
  return config.about;
};

export default about;
