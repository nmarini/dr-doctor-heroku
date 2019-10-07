Rails.application.routes.draw do

  post "/api/v1/login", to: "sessions#create"

  namespace :api do 
    namespace :v1 do 
      resources :diagnoses, :only => [:show, :create, :update, :destroy]
      resources :users, :only => [:show, :create, :update, :destroy]
      
    end 
  end 
  
end
