/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Partner as PrismaPartner,
  Match as PrismaMatch,
} from "@prisma/client";

export class PartnerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PartnerCountArgs, "select">): Promise<number> {
    return this.prisma.partner.count(args);
  }

  async partners(args: Prisma.PartnerFindManyArgs): Promise<PrismaPartner[]> {
    return this.prisma.partner.findMany(args);
  }
  async partner(
    args: Prisma.PartnerFindUniqueArgs
  ): Promise<PrismaPartner | null> {
    return this.prisma.partner.findUnique(args);
  }
  async createPartner(args: Prisma.PartnerCreateArgs): Promise<PrismaPartner> {
    return this.prisma.partner.create(args);
  }
  async updatePartner(args: Prisma.PartnerUpdateArgs): Promise<PrismaPartner> {
    return this.prisma.partner.update(args);
  }
  async deletePartner(args: Prisma.PartnerDeleteArgs): Promise<PrismaPartner> {
    return this.prisma.partner.delete(args);
  }

  async findMatches(
    parentId: string,
    args: Prisma.MatchFindManyArgs
  ): Promise<PrismaMatch[]> {
    return this.prisma.partner
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .matches(args);
  }
}