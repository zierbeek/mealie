import { BaseAPI } from "../_base";
import { FileTokenResponse } from "~/types/api-types/response";

const prefix = "/api";

export class UtilsAPI extends BaseAPI {
  async download(url: string) {
    const { response } = await this.requests.get<FileTokenResponse>(url);

    if (!response) {
      return;
    }

    const token: string = response.data.fileToken;

    const tokenURL = prefix + "/utils/download?token=" + token;
    window.open(tokenURL, "_blank");
    return response;
  }
}
