import { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";
import { FileWithPath } from "react-dropzone";
import { ListItem, InputEdit } from "./styles";

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

export default function EditInPlace({ file, onChangeFile }: EditInPlaceProps) {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  function OnClick() {
    setIsEditing(true);
  }

  function OnBlur() {
    onChangeFile({
      path: file.path || "",
      instrument: inputRef.current?.value || "",
    });
    setIsEditing(false);
  }

  useEffect(() => {
    if (isEditing) inputRef.current?.focus();
  }, [isEditing]);

  if (isEditing)
    return (
      <ListItem key={file.path}>
        <InputEdit
          ref={inputRef}
          defaultValue={file.instrument}
          onBlur={OnBlur}
        />
      </ListItem>
    );
  return (
    <ListItem onClick={OnClick} key={file.path}>
      {file.instrument}
    </ListItem>
  );
}
