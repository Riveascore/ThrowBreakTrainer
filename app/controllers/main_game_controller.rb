class MainGameController < ApplicationController
  def throw_break_trainer
    allVideos = Dir.glob("public/videos/*")# 
    allVideos = allVideos.map { |fileName| fileName.sub /public\/videos\//, '' } 
    videoNames = allVideos.sort_by { |fileName| fileName }
    vids = videoNames.map { |videoName| 
      videoInfo = VideoInfo.where("video_name = ?", videoName).first
    }
    @videos = vids.to_json  	
    @videoNames = videoNames.to_json
  end
end
