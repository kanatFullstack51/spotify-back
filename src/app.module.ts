import { Module } from "@nestjs/common";
import { TrackService } from './track/track.service';
import { TrackModule } from './track/track.module';
import {MongooseModule} from '@nestjs/mongoose';
import { FileModule } from "./file/file.module";
@Module({
    controllers:[],
    imports: [
        MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.yfxgzlk.mongodb.net/?retryWrites=true&w=majority'),
        TrackModule,
        FileModule
    
    ]
})
export class AppModule{}