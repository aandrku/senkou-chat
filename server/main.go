package main

import (
	"log"
	"net/http"
	"senkou-chat/internal/auth"
)

func main() {


	authMux := auth.Mux()

	fs := http.FileServer(http.Dir("."))

	mainMux := http.NewServeMux()

	mainMux.Handle("/dist/", fs)
	mainMux.Handle("/css/", fs)
	mainMux.Handle("/assets/", fs)

	mainMux.Handle("/auth/", http.StripPrefix("/auth", authMux))
	mainMux.HandleFunc("/", RootHandleFunc)

	server := http.Server{
		Addr: ":80",
		Handler: mainMux,
	}

	if err := server.ListenAndServe(); err != nil {
		log.Fatal("Failed to start a server.")
	}



}

func RootHandleFunc(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "./pages/index.html")

}

