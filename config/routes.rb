Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'movies/index'
      post 'movies/create'
      delete 'movies/:id', to: 'movies#destroy'
    end
  end

   root 'movies#index'
end
