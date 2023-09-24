import Handlebars from 'handlebars';

import angleRight from '../components/icons/AngleRight/template';
import angleLeft from '../components/icons/AngleLeft/template';
import pen from '../components/icons/Pen/template';
import ellipsisVertical from '../components/icons/EllipsisVertical/template';
import paperclip from '../components/icons/Paperclip/template';
import search from '../components/icons/Search/template';
import plus from '../components/icons/Plus/template';
import xmark from '../components/icons/Xmark/template';
import pencil from '../components/icons/Pencil/template';
import lock from '../components/icons/Lock/template';
import exit from '../components/icons/Exit/template';
import hand from '../components/icons/Hand/template';
import otter from '../components/icons/Otter/template';

export const registerPartials = () => {
  Handlebars.registerPartial('AngleRightIcon', angleRight);
  Handlebars.registerPartial('AngleLeftIcon', angleLeft);
  Handlebars.registerPartial('PenIcon', pen);
  Handlebars.registerPartial('EllipsisIcon', ellipsisVertical);
  Handlebars.registerPartial('PaperclipIcon', paperclip);
  Handlebars.registerPartial('SearchIcon', search);
  Handlebars.registerPartial('PlusIcon', plus);
  Handlebars.registerPartial('XmarkIcon', xmark);
  Handlebars.registerPartial('PencilIcon', pencil);
  Handlebars.registerPartial('LockIcon', lock);
  Handlebars.registerPartial('ExitIcon', exit);
  Handlebars.registerPartial('HandIcon', hand);
  Handlebars.registerPartial('OtterIcon', otter);
};

export default registerPartials;


