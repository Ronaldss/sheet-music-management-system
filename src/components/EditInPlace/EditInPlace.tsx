import { useState, useEffect, useRef } from "react";
import { ListItem, InputEdit } from "./styles";

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
