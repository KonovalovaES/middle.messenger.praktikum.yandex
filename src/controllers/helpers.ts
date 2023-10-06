import type { IChatInfo } from '../core/Store/types/types';

interface ErrorWithReason {
  reason: string;
}

const hasReason = (error: unknown): error is ErrorWithReason => typeof error === 'object' &&  error !== null && Object.prototype.hasOwnProperty.call(error, 'reason');

export const handleError = (error: unknown) => (
  alert(hasReason(error) ? error.reason : String(error))
);

export const sortMessages = (chats: IChatInfo[]) => chats.sort((chat1, chat2) => (
  (new Date(chat2?.last_message?.time)).getTime() - (new Date(chat1?.last_message?.time)).getTime()
));
