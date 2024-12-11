package auth

import (
	"log"
	"net/http"
)

func servePage(w http.ResponseWriter, r *http.Request) {

	log.Println("Serve auth page called")

	http.ServeFile(w, r, "./pages/auth.html")

}
