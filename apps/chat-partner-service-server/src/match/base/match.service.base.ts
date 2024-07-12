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
  Match as PrismaMatch,
  Partner as PrismaPartner,
} from "@prisma/client";

export class MatchServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.MatchCountArgs, "select">): Promise<number> {
    return this.prisma.match.count(args);
  }

  async matches(args: Prisma.MatchFindManyArgs): Promise<PrismaMatch[]> {
    return this.prisma.match.findMany(args);
  }
  async match(args: Prisma.MatchFindUniqueArgs): Promise<PrismaMatch | null> {
    return this.prisma.match.findUnique(args);
  }
  async createMatch(args: Prisma.MatchCreateArgs): Promise<PrismaMatch> {
    return this.prisma.match.create(args);
  }
  async updateMatch(args: Prisma.MatchUpdateArgs): Promise<PrismaMatch> {
    return this.prisma.match.update(args);
  }
  async deleteMatch(args: Prisma.MatchDeleteArgs): Promise<PrismaMatch> {
    return this.prisma.match.delete(args);
  }

  async getPartner(parentId: string): Promise<PrismaPartner | null> {
    return this.prisma.match
      .findUnique({
        where: { id: parentId },
      })
      .partner();
  }
}
