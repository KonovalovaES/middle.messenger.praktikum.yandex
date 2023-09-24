import Block from '../../core/Block';

interface User {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string
  avatar?: string;
  login: string;
}

export interface UserProfile extends User {
  email: string;
  phone: string;
}

export interface UserChat extends User {
  role?: string;
}

export interface Message {
  chat_id: number;
  user: UserChat;
  time: string;
  content: string;
  img?: string;
}

export interface ChatPreview {
  id: number;
  title: string;
  avatar?: string;
  created_by: number;
  last_message: Message;
  unread_count?: number;
}

export type GroupedMessages = Record<string, Message[]>;

type InputType = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local'
  | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password'
  | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time'
  | 'url' | 'week';

type A = (str: string, errorComponent: Block) => void;
type B = (str: [string, string], errorComponent: Block) => void;

interface InputField {
  label?: string;
  type: InputType;
  name: string;
  errorText?: string;
  validate?: A | B;
  ref?: string;
  placeholder?: string;
  value?: string;
}
