package auth

import "net/http"

func Mux() *http.ServeMux {

	mux := http.NewServeMux()

	mux.HandleFunc("/", servePage)

	return mux

}
