import FormInput from '../../Inputs/FormInput/FormInput';
import type IFormInput from '../../../Inputs/FormInput/types/types';

namespace IForm {
  interface Props {
    title: string;
    text?: string;
    fields?: IFormInput[];
    imgLoad: boolean;
    mainButtonTitle: string;
    additionalButtonTitle: string;
    onMainButtonClick: (event: HTMLButtonElement) => void;
    onAdditionalButtonClick: (event: HTMLButtonElement) => void;
  }

  type Refs = Record<string, FormInput>;
}

export default IForm;
