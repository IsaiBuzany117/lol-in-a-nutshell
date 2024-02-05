using System.Text.Json.Nodes;
using Microsoft.AspNetCore.Mvc;


namespace LOL_API.Controllers
{
    [Route("[controller]")]
    public class ChampionsController : Controller
    {
        private readonly HttpClient _httpClient;

        public ChampionsController(IHttpClientFactory httpClientFactory)
        {
            _httpClient = httpClientFactory.CreateClient();
        }

        [HttpGet]
        public async Task<IActionResult> GetChampions(){
                string urlChamps = "https://ddragon.leagueoflegends.com/cdn/14.2.1/data/es_MX/champion.json";
            try
            {
                HttpResponseMessage responseMessage = await _httpClient.GetAsync(urlChamps);

                if (responseMessage.IsSuccessStatusCode)
                {
                    try
                    {
                        var respuesta = await responseMessage.Content.ReadAsStringAsync();
                        var JsonDoc = JsonObject.Parse(respuesta);
                        var listaChamps = JsonDoc?["data"].AsObject().ToArray();

                        List<String> nomChamps = listaChamps.Select(champ => champ.Key).ToList();

                        return Ok(nomChamps);
                    }
                    catch (System.Exception)
                    {
                        return BadRequest("Error en la solicitud HTTP");
                    }
                }
                else
                {
                    return StatusCode((int)responseMessage.StatusCode, "Error con el servidor de League of Legends");
                }
            }
            catch (HttpRequestException ex)
            {
                return StatusCode(500, $"Error interno en el servidor: {ex.Message}");
            }
        }

        [HttpGet("{champ}")]
        public async Task<IActionResult> GetChamp(string champ){
            try
            {
                return Ok();
            }
            catch (HttpRequestException ex)
            {
                return StatusCode(500, $"Error interno en el servidor: {ex.Message}");
            }
        }
    }
}