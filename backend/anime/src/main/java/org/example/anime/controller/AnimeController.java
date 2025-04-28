package org.example.anime.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController

@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/anime")
public class AnimeController {
    private final RestTemplate restTemplate = new RestTemplate();

    @GetMapping("/popular")
    public ResponseEntity<String> getPopularAnime() {
        String url = "https://api.jikan.moe/v4/top/anime";
        String response = restTemplate.getForObject(url, String.class);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/search")
    public ResponseEntity<String> searchAnime(@RequestParam String q) {
        String url = "https://api.jikan.moe/v4/anime?q=" + q;
        String response = restTemplate.getForObject(url, String.class);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<String> getAnimeDetails(@PathVariable String id) {
        String url = "https://api.jikan.moe/v4/anime/" + id;
        String response = restTemplate.getForObject(url, String.class);
        return ResponseEntity.ok(response);
    }
}
