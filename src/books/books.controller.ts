import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    return await this.booksService.create(createBookDto);
  }

  @Get()
  async findAll() {
    return await this.booksService.findAll();
  }

  @Get(':bookId')
  async findOne(@Param('bookId') bookId: string) {
    return await this.booksService.findOne(bookId);
  }

  @Put(':bookId')
  async update(
    @Param('bookId') bookId: string,
    @Body() updateBookDto: UpdateBookDto,
  ) {
    return await this.booksService.update(bookId, updateBookDto);
  }

  @Delete(':bookId')
  async remove(@Param('bookId') bookId: string) {
    return await this.booksService.remove(bookId);
  }
}
