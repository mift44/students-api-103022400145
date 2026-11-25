import { StudentsService } from './students.service';
export declare class StudentsController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
    create(body: {
        nim: string;
        nama: string;
        prodi: string;
    }): Promise<{
        message: string;
        data: {
            nim: string;
            nama: string;
            prodi: string;
            id: number;
        };
    }>;
    findAll(): Promise<{
        message: string;
        total: number;
        data: {
            nim: string;
            nama: string;
            prodi: string;
            id: number;
        }[];
    }>;
    findOne(id: number): Promise<{
        message: string;
        data: {
            nim: string;
            nama: string;
            prodi: string;
            id: number;
        };
    }>;
    update(id: number, body: {
        nim?: string;
        nama?: string;
        prodi?: string;
    }): Promise<{
        message: string;
        data: {
            nim: string;
            nama: string;
            prodi: string;
            id: number;
        };
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
