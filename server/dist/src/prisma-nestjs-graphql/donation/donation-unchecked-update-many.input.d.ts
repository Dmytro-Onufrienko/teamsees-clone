import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
export declare class DonationUncheckedUpdateManyInput {
    id?: IntFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    count?: IntFieldUpdateOperationsInput;
    name?: StringFieldUpdateOperationsInput;
    email?: StringFieldUpdateOperationsInput;
    phoneNumber?: NullableIntFieldUpdateOperationsInput;
    team?: NullableStringFieldUpdateOperationsInput;
    message?: NullableStringFieldUpdateOperationsInput;
}
