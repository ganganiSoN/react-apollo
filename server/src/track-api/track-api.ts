import { RESTDataSource } from '@apollo/datasource-rest';
import { AuthorModel, ModuleModel, TrackModel } from '../model/model';

export class TrackAPI extends RESTDataSource {
  baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';

  getTracksForHome() {
    return this.get<TrackModel[]>('tracks');
  }

  getAuthor(authorId: String) {
    return this.get<AuthorModel>(`author/${authorId}`);
  }

  getTrack(trackId: string) {
    return this.get<TrackModel>(`track/${trackId}`);
  }

  getTrackModule(trackId: string) {
    return this.get<ModuleModel[]>(`track/${trackId}/modules`);
  }
}
