import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable()
export class ConvertService {
    constructor(private httpClient: HttpClient) {}

    convert(input: Object){
        return this.httpClient.post(
            environment.apiUrl + "convert/convertToCSV",
            {input}
          );
    }

}