import client from "@/sanity/sanity.client";
import { useState, useEffect } from "react";

export default function MyPortrait() {
    return (
        <div className="Gallery_pages">
            <img
                className="Gallery_pages_img"
                src="/portrait.jpg"
                alt="The portrait bg"
            />
        </div>
    )
}