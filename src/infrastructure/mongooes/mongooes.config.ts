import { MongooseModule } from "@nestjs/mongoose"
import { ENVConfig } from "../env"

export const MongooseConfigModule = MongooseModule.forRootAsync({
    useFactory: async () => {
        return {
            uri: ENVConfig.MONGODB_URI
        }
    },
})