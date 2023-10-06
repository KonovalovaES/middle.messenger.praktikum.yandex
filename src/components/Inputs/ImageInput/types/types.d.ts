namespace IImageInput {
  type Props = {
    avatar: string;
    withAddIcon: boolean;
    withRemoveIcon: boolean;
    errorText: string;
    onUpload: () => void;
    onRemove: () => void;
  }
}

export default IImageInput;
