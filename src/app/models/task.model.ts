export class Task {
  constructor(
    public title: string,
    public decription: string|null,
    public steps: string[] | null,
    public date?: Date,
    public finished: boolean = false
  ) {}
}
