import mongoose, { Schema, Document } from 'mongoose';

export interface ISubject extends Document {
    name: string;
    teacher: string;
    alumni: mongoose.Types.ObjectId[];
}

const SubjectSchema: Schema = new Schema({
    name: { type: String, required: true },
    teacher: { type: String, required: true },
    alumni: [{ type: mongoose.Types.ObjectId, ref: 'User' }]
});

export const Subject = mongoose.model<ISubject>('Subject', SubjectSchema);