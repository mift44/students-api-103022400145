import { PrismaService } from '../prisma.service';
export declare class StudentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: {
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
    update(id: number, data: {
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
