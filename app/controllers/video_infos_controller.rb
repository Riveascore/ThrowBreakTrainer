class VideoInfosController < ApplicationController
  before_action :set_video_info, only: [:show, :edit, :update, :destroy]

  # GET /video_infos
  # GET /video_infos.json
  def index
    @video_infos = VideoInfo.all
  end

  # GET /video_infos/1
  # GET /video_infos/1.json
  def show
  end

  # GET /video_infos/new
  def new
    @video_info = VideoInfo.new
  end

  # GET /video_infos/1/edit
  def edit
  end

  # POST /video_infos
  # POST /video_infos.json
  def create
    @video_info = VideoInfo.new(video_info_params)

    respond_to do |format|
      if @video_info.save
        format.html { redirect_to @video_info, notice: 'Video info was successfully created.' }
        format.json { render action: 'show', status: :created, location: @video_info }
      else
        format.html { render action: 'new' }
        format.json { render json: @video_info.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /video_infos/1
  # PATCH/PUT /video_infos/1.json
  def update
    respond_to do |format|
      if @video_info.update(video_info_params)
        format.html { redirect_to @video_info, notice: 'Video info was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @video_info.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /video_infos/1
  # DELETE /video_infos/1.json
  def destroy
    @video_info.destroy
    respond_to do |format|
      format.html { redirect_to video_infos_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_video_info
      @video_info = VideoInfo.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def video_info_params
      params.require(:video_info).permit(:video_name, :number_of_milliseconds)
    end
end
