export class AuditLog {
  constructor(
    public readonly id: number,
    public readonly campaignId: number,
    public readonly message: string,
    public readonly createdAt: Date = new Date(),
  ) {}
}
