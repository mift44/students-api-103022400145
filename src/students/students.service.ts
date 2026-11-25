
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class StudentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: { nim: string; nama: string; prodi: string }) {
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

  async findOne(id: number) {
    const student = await this.prisma.student.findUnique({
      where: { id },
    });

    if (!student) {
      throw new NotFoundException('Data mahasiswa tidak ditemukan');
    }

    return {
      message: 'Berhasil mengambil data mahasiswa',
      data: student,
    };
  }

  async update(
    id: number,
    data: { nim?: string; nama?: string; prodi?: string },
  ) {
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

  async remove(id: number) {
    await this.findOne(id);

    await this.prisma.student.delete({
      where: { id },
    });

    return {
      message: 'Berhasil menghapus data mahasiswa',
    };
  }
}
