import { HttpCode, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { NotFoundError } from 'rxjs';

interface Board {
  title: string;
  content: string;
  author: string;
}


@Injectable()
export class BoardService {
  private boardList: Board[] = []

  create(createBoard: CreateBoardDto) {
    this.boardList.push({
      title: createBoard.title,
      content: createBoard.content,
      author: createBoard.author,
    })
    
  }

  get() {
    return this.boardList.map(b => {
      return {
        title: b.title,
        content: b.content,
        author: b.author
      };
    })
  }
}
