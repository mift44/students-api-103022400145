"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let StudentsService = class StudentsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const student = await this.prisma.student.create({
            data,
        });
        return {
            message: 'Berhasil menambahkan data mahasiswa',
            data: student,
        };
    }
    async findAll() {
        const students = await this.prisma.student.findMany({
            orderBy: { id: 'asc' },
        });
        return {
            message: 'Berhasil mengambil data mahasiswa',
            total: students.length,
            data: students,
        };
    }
    async findOne(id) {
        const student = await this.prisma.student.findUnique({
            where: { id },
        });
        if (!student) {
            throw new common_1.NotFoundException('Data mahasiswa tidak ditemukan');
        }
        return {
            message: 'Berhasil mengambil data mahasiswa',
            data: student,
        };
    }
    async update(id, data) {
        await this.findOne(id);
        const student = await this.prisma.student.update({
            where: { id },
            data,
        });
        return {
            message: 'Berhasil mengubah data mahasiswa',
            data: student,
        };
    }
    async remove(id) {
        await this.findOne(id);
        await this.prisma.student.delete({
            where: { id },
        });
        return {
            message: 'Berhasil menghapus data mahasiswa',
        };
    }
};
exports.StudentsService = StudentsService;
exports.StudentsService = StudentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StudentsService);
//# sourceMappingURL=students.service.js.map