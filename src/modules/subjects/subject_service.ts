import { Subject, ISubject } from './subject_model';

export const createSubject = async (data: Partial<ISubject>): Promise<ISubject> => {
    const subject = new Subject(data);
    return await subject.save();
};

export const getAllSubjects = async (): Promise<ISubject[]> => {
    return await Subject.find().populate('alumni').exec();
};

export const getSubjectById = async (id: string): Promise<ISubject | null> => {
    return await Subject.findById(id).populate('alumni').exec();
};

export const updateSubject = async (id: string, data: Partial<ISubject>): Promise<ISubject | null> => {
    return await Subject.findByIdAndUpdate(id, data, { new: true }).populate('alumni').exec();
};

export const deleteSubject = async (id: string): Promise<ISubject | null> => {
    return await Subject.findByIdAndDelete(id).exec();
};

export const getAlumniBySubjectId = async (id: string): Promise<any[]> => {
    const subject = await Subject.findById(id).populate('alumni').exec();
    return subject ? subject.alumni : [];
};