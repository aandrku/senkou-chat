package main

import (
	"log"
	"net/http"
)

func main() {

	fs := http.FileServer(http.Dir("."))

	mainMux := http.NewServeMux()

	mainMux.Handle("/dist/", fs)
	mainMux.Handle("/css/", fs)
	mainMux.Handle("/assets/", fs)

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

