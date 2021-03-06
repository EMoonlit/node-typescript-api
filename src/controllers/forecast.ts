import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('forecast')
export class ForecastController {
  @Get('')
  public getForecastForgeLoggedUser(_: Request, res: Response): void {
    res.send([
      {
        time: '2020',
      },
    ]);
  }
}
