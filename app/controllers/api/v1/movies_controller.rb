class Api::V1::MoviesController < ApplicationController
  before_action :set_movie, only: [ :show, :edit, :update, :destroy]
  def index
    @movies = Movie.all
    render json: @movies
  end

  def show
    if @movie
      render json: @movie
    else
      render json: @movie.error
    end
  end

  def new
    @movie = Movie.new
  end

  def edit
  end

  def create
    @movie = Movie.new(movie_params)
    if @movie.save
      render json: @movie
    else
      render json: @movie.errors
    end
  end

  def update
  end

  def destroy
    @movie.destroy
    render json: { notice: 'movie sucessfully removed' }
  end

  private

  def set_movie
    @movie = Movie.find(params[:id])
  end

  def movie_params
    params.permit(:name, :price)
   end
end
