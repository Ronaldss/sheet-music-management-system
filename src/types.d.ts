type Files = FileWithPath & {
  instrument?: string;
};

type FileChanged = {
  instrument: string;
  path: string;
};

type EditInPlaceProps = {
  file: Files;
  onChangeFile: Dispatch<SetStateAction<FileChanged | undefined>>;
};
